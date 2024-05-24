


export async function obterOrganizacoes() {
    return fetch('/api/Organizacoes').then(r => r.json())
}

export async function obterOrganizacao(id) {
    return fetch(`/api/Organizacoes/${id}`).then(r => r.json())
}