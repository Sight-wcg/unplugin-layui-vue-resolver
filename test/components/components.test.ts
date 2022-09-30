import { describe, expect, test } from 'vitest';
import { LayuiVueResolver, matchComponents } from '../../src/index';
import * as components from '@layui/layui-vue';

import type { ComponentResolveResult, ComponentResolverObject } from '../../src/types';

function camelCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function testLayuiComponentResolve(resolver: ComponentResolverObject, importName: string) {
  let styleDir: string | undefined = camelCase(importName.slice(3)); // LayBackTop -> backTop
  for (const item of matchComponents) {
    if (item.pattern.test(importName)) {
      styleDir = item.styleDir;
      break;
    }
  }
  const effects = styleDir
    ? [`@layui/layui-vue/es/${styleDir}/index.css`, '@layui/layui-vue/es/index/index.css']
    : undefined;
  expect(resolver.resolve(importName)).toEqual<ComponentResolveResult>({
    name: importName,
    from: '@layui/layui-vue',
    sideEffects: effects,
  });
}

describe('LayuiVueResolver', () => {
  test('Resolve component except icon and layer', async () => {
    const resolver = LayuiVueResolver() as ComponentResolverObject;
    expect(typeof resolver).toEqual('object');
    for (const key of Object.keys(components)) {
      const compName = key;
      if (['LayIcon', 'LayLayer', 'layer', 'default', 'install'].includes(compName)) continue;
      testLayuiComponentResolve(resolver, compName);
    }
  });
});
