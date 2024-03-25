import { createRouter } from '@backstage/plugin-permission-backend';
import { RBACPolicyBuilder } from '@spotify/backstage-plugin-rbac-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    config: env.config,
    logger: env.logger,
    discovery: env.discovery,
    policy: await RBACPolicyBuilder.create(env).build(),
    identity: env.identity,
  });
}