import { describe, expect, test } from 'vitest';
import { LayuiVueResolver } from '../../src/index';

import type { ComponentResolveResult, ComponentResolverObject } from '../../src/types';

function testNoIconComponentResolve(resolver: ComponentResolverObject) {
  expect(resolver.resolve('LayButton')).toEqual<ComponentResolveResult>({
    name: 'LayButton',
    from: '@layui/layui-vue',
    sideEffects: ['@layui/layui-vue/es/button/index.css', '@layui/layui-vue/es/index/index.css'],
  });
}

describe('LayuiVueResolver', () => {
  test('Resolve component except icon', async () => {
    const resolver = LayuiVueResolver() as ComponentResolverObject;
    expect(typeof resolver).toEqual('object');
    testNoIconComponentResolve(resolver);
    expect(resolver.resolve('StarIcon')).toBeFalsy();
    expect(resolver.resolve('LayIcon')).toBeFalsy();
  });

  test('Can resolve icon component', async () => {
    const resolver = LayuiVueResolver({ resolveIcons: true }) as ComponentResolverObject;
    testNoIconComponentResolve(resolver);
    expect(resolver.resolve('LayIcon')).toEqual<ComponentResolveResult>({
      name: 'LayIcon',
      from: '@layui/icons-vue',
      sideEffects: '@layui/icons-vue/lib/index.css',
    });
    expect(resolver.resolve('StarIcon')).toEqual<ComponentResolveResult>({
      name: 'StarIcon',
      from: '@layui/icons-vue',
      sideEffects: '@layui/icons-vue/lib/index.css',
    });
  });

  test('Resolve component layer', async () => {
    const resolver = LayuiVueResolver({ resolveIcons: true }) as ComponentResolverObject;
    expect(resolver.resolve('LayLayer')).toEqual<ComponentResolveResult>({
      name: 'LayLayer',
      from: '@layui/layer-vue',
      sideEffects: '@layui/layer-vue/lib/index.css',
    });

    expect(resolver.resolve('layer')).toEqual<ComponentResolveResult>({
      name: 'layer',
      from: '@layui/layer-vue',
      sideEffects: '@layui/layer-vue/lib/index.css',
    });
  });

  test('Test exclude option', async () => {
    const resolver = LayuiVueResolver({ exclude: ['LayString', /^LayDoc[A-Z]/] }) as ComponentResolverObject;
    expect(resolver.resolve('LayString')).toBeFalsy();
    expect(resolver.resolve('LayDocRegExp')).toBeFalsy();
  });

  test('Test importStyle option', async () => {
    const resolver = LayuiVueResolver({ importStyle: false, resolveIcons: true }) as ComponentResolverObject;
    expect(resolver.resolve('LayIcon')).toEqual<ComponentResolveResult>({
      name: 'LayIcon',
      from: '@layui/icons-vue',
      sideEffects: undefined,
    });
    expect(resolver.resolve('LayButton')).toEqual<ComponentResolveResult>({
      name: 'LayButton',
      from: '@layui/layui-vue',
      sideEffects: undefined,
    });
    expect(resolver.resolve('LayLayer')).toEqual<ComponentResolveResult>({
      name: 'LayLayer',
      from: '@layui/layer-vue',
      sideEffects: undefined,
    });
    expect(resolver.resolve('layer')).toEqual<ComponentResolveResult>({
      name: 'layer',
      from: '@layui/layer-vue',
      sideEffects: undefined,
    });
  });
});
