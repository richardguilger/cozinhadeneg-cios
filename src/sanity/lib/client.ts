import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

// Fallback para evitar erro de inicialização antes de configurar o .env.local
const validProjectId = projectId && /^[a-z0-9-]+$/.test(projectId) ? projectId : 'your-project-id';

export const client = createClient({
    projectId: validProjectId,
    dataset: dataset || 'production',
    apiVersion: apiVersion || '2024-03-20',
    useCdn,
    perspective: 'published',
})

export async function safeFetch<T>(query: string, params: any = {}): Promise<T | null> {
    if (validProjectId === 'your-project-id') return null;
    try {
        return await client.fetch(query, params);
    } catch (error) {
        console.error("Sanity Fetch Error:", error);
        return null;
    }
}
