const matchComponents = [
  {
    pattern: /^LayAvatarList$/,
    styleDir: "avatar",
  },
  {
    pattern: /^LayBreadcrumbItem$/,
    styleDir: "breadcrumb",
  },
  {
    pattern: /^(LayCarouselItem)$/,
    styleDir: "carousel",
  },
  {
    pattern: /^(LayCheckboxGroup)$/,
    styleDir: "checkbox",
  },
  {
    pattern: /^LayCol$/,
    styleDir: "row",
  },
  {
    pattern: /^(LayCollapseItem)$/,
    styleDir: "collapse",
  },
  {
    pattern: /^LayConfigProvider$/,
    styleDir: undefined,
  },
  {
    pattern: /^LayCountUp$/,
    styleDir: undefined,
  },
  {
    pattern: /^(LayDropdownMenu|LayDropdownMenuItem)$/,
    styleDir: "dropdown",
  },
  {
    pattern: /^(LayFormItem)$/,
    styleDir: "form",
  },
  {
    pattern: /^(LayMenuItem|LaySubMenu)$/,
    styleDir: "menu",
  },
  {
    pattern: /^LaySelectOption$/,
    styleDir: "select",
  },
  {
    pattern: /^LaySkeletonItem$/,
    styleDir: "skeleton",
  },
  {
    pattern: /^LaySplitPanelItem$/,
    styleDir: "splitPanel",
  },
  {
    pattern: /^LayStepItem$/,
    styleDir: "step",
  },
  {
    pattern: /^(LayTabItem)$/,
    styleDir: "tab",
  },
  {
    pattern: /^LayTimelineItem$/,
    styleDir: "timeline",
  },
];

export interface LayuiVueResolverOptions {
  /**
   * import style along with components
   *
   * @default 'css'
   */
  importStyle?: boolean | "css";

  /**
   * resolve `@layui/layui-vue' icons
   * requires package `@layui/icons-vue`
   *
   * @default false
   */
  resolveIcons?: boolean;

  /**
   * exclude components that do not require automatic import
   *
   */
  exclude?: Array<string | RegExp>;
}

const libRE = /^Lay[A-Z]/
const layerRE = /^(layer|LayLayer)$/
const iconsRE = /^([A-Z][\w]+Icon|LayIcon)$/
const esComponentsFolder = "@layui/layui-vue/es"

function lowerCamelCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function getSideEffects(importName: string, options: LayuiVueResolverOptions) {
  const { importStyle = "css" } = options;
  if (!importStyle) {
    return undefined
  }
  let styleDir: string | undefined = lowerCamelCase(importName.slice(3)); // LayBackTop -> backTop
  for (const item of matchComponents) {
    if (item.pattern.test(importName)) {
      styleDir = item.styleDir
      break
    }
  }
  if (importStyle === 'css' || importStyle) {
    return styleDir
      ? [`${esComponentsFolder}/${styleDir}/index.css`, `${esComponentsFolder}/index/index.css`]
      : undefined
  }
}

function isExclude(name: string, exclude: Array<string | RegExp> | undefined): boolean {
  if (exclude) {
    for (const item of exclude) {
      if (name === item || name.match(item)) {
        return true
      }
    }
  }
  return false
}

function resolveComponent(importName: string, options: LayuiVueResolverOptions) {
  if (isExclude(importName, options.exclude)) {
    return undefined
  }

  if (options.resolveIcons && importName.match(iconsRE)) {
    return {
      name: importName,
      from: '@layui/icons-vue',
      sideEffects: '@layui/icons-vue/lib/index.css',
    }
  } else if (importName.match(layerRE)) {
    return {
      name: importName,
      from: '@layui/layer-vue',
      sideEffects: '@layui/layer-vue/lib/index.css',
    }
  } else if (importName.match(libRE)) {
    return {
      name: importName,
      from: '@layui/layui-vue',
      sideEffects: getSideEffects(importName, options),
    }
  }
}

/**
 * Resolver for layui-vue
 *
 * @param options
 * @returns
 */
export function LayuiVueResolver(options: LayuiVueResolverOptions = {}) {
  return {
    type: "component",
    resolve: (name: string) => {
      return resolveComponent(name, options);
    },
  };
}