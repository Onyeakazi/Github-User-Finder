class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    // Show User Profile
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
                </div>
                <div class="col-md-3">
                   <div class="mb-1"><span class="badge text-bg-primary">Public Repos: ${user.public_repos}</span></div>
                   <div class="mb-1"><span class="badge text-bg-secondary">Public Gists: ${user.public_gists}</span></div>
                   <div class="mb-1"><span class="badge text-bg-success">Followers: ${user.followers}</span></div>
                   <div class="mb-1"><span class="badge text-bg-info">Following: ${user.following}</span></div>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="paga-heading mb-3">Latest Repos</>
        <div id="repos"></div>
        `;
    }

    // Show User Repos
    showRepos(repos) {
        let output = "";

        repos.forEach(function(repo) {
         output += `
             <div class="card card-body mb-">
               <div class="row">
                  <div class="col-md-6">
                     <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
                  <div class="col-md-6">
                    <span class="badge text-bg-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge text-bg-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge text-bg-success">Forks: ${repo.forks_count}</span>
                  </div>
               </div>
             </div>
            `;
        });

        // Output repos
        document.getElementById("repos").innerHTML = output;
    }

    // Show Alert Message
    showAlert(message, className) {
        // Clear any remaining alerts
        this.clearAlert();
       // Create  div
       const div = document.createElement("div");
       // Add Class
       div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector(".searchContainer");
        // Get searchBox
        const search = document.querySelector(".search");
        // Insert alert
        container.insertBefore(div, search); 

        // Time out after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if(currentAlert) {
            currentAlert.remove(); 
        }
    }

    // Clear Profile
    clearProfile() {
       this.profile.innerHTML = "";
    }

}