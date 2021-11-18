 // Abaixo é um objeto. O objeto agrupa informações relacionadas a uma fonte, exemplo, uma 
        //pessoa, ela tem nome, idade, altura, peso (...) logo posso criar um objeto pessoa.
        // No caso abaixo foram links. Quando se trata de objetos,a variavel tem o let ou const
        // no início, no nome do objeto e os valores são separados por ':' finalizados com ','
        // com excessão do último que não precisa de ','.
        const linksSocialMedia = {
            github: 'mayrochinha',
            youtube: 'channel/UC-EK17ixSxy7JpdbQKW8ghg',
            facebook: 'pricilamayara',
            instagram: 'mayrochinha',
            twitter: 'mayrochinha'
        }

        function changeSocialMediaLinks() {
            //DOM - DOCUMENT OBJECT MODEL
           // document.getElementById('username').textContent = "Diego"
            for(let li of socialLinks.children){
                const social = li.getAttribute('class');
                
                li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
                
                //alert(li.children[0].href);
            }
        }

        changeSocialMediaLinks();

        function getGitHubProfileInfos(){
            const url = `https://api.github.com/users/${linksSocialMedia.github}`

            fetch(url)
              .then(response => response.json())
              .then(data => {
                userName.textContent = data.name
                userBio.textContent = data.bio
                userLink.href = data.html_url
                userImage.src = data.avatar_url
                userLogin.textContent = data.login 
            })

        }

        //getGitHubProfileInfos()        