class Github {
    constructor() {
        this.client_id = "ce7a08ecbde773ee5f5d";
        this.client_secret = "dfeb963af65123f053358cba1388cae19ec7efc5";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}