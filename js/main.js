const searchInp = document.querySelector('input')
const searchBtn = document.querySelector('.search-btn')
const contentGit = document.querySelector('.content-git')

const userName = document.querySelector('.user__title .user-id h2')
const userLink = document.querySelector('.user__title .user-id span')
const userJoinDate = document.querySelector('.joined-date')

const gitBio = document.querySelector('.git-bio')

const repos = document.querySelector('.repos')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')

const locationIn = document.querySelector('.location-in')
const twitterIn = document.querySelector('.twitter-in')
const linkIn = document.querySelector('.link-in')
const officeIn = document.querySelector('.office-in')

const showError = document.querySelector('.show-error')

const img = document.querySelector('img')

const showErrorFnc = ()=> {
    showError.classList.remove('hidden')
    setTimeout(()=> {
        showError.classList.add('hidden')
    }, 2000)
}


searchBtn.addEventListener('click', () => {
    contentGit.classList.add('hidden')
    if(searchInp.value) {
        fetch(`${API}${searchInp.value}`)
            .then((responce)=> responce.json())
            .then((data)=> {
                contentGit.classList.remove('hidden')
                userName.textContent = data.name
                userLink.textContent = `@${data.login}`
                userJoinDate.textContent = data.created_at.slice(0,10)
                gitBio.textContent = data.bio
                followers.textContent = data.followers
                following.textContent = data.following
                repos.textContent = data.public_repos

                if(data.location) {
                    locationIn.textContent = data.location
                }else {
                    locationIn.textContent = 'Is not available'
                }
                
                if(data.twitter_username) {
                    twitterIn.textContent = data.twitter_username
                }else {
                    twitterIn.textContent = 'Is not available'
                }

                if(data.company) {
                    officeIn.textContent = data.company
                }else {
                    officeIn.textContent = 'Is not available'
                }

                if(data.html_url) {
                    linkIn.textContent = data.html_url
                }else {
                    linkIn.textContent = 'Is not available'
                }

                img.setAttribute('src', `${data.avatar_url}`)
            })
            .catch(()=> {
                contentGit.classList.add('hidden')
                showErrorFnc()
            })
            
    }else {
        showErrorFnc()
    }
})









const API = 'https://api.github.com/users/'