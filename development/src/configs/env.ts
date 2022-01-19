import * as env from 'env-var';

export const nodeConfig = {
	NODE_ENV: env.get('NODE_ENV').required().default('development_local').example('development_local').asString(),
};