import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default ({mode}) => {
	process.env = {...process.env, ...loadEnv(mode, process.cwd())};

	return defineConfig({
		plugins: [react()],
		server:{
			port: parseInt(process.env.VITE_DEV_PORT || '')
		},
		preview:{
			port: parseInt(process.env.VITE_DEV_PORT || '')
		},
		resolve:{
			alias:{
				'@' : resolve(__dirname, './src')
			},
		},
	})
}
