const listElem = document.querySelector('.repo-list');

export const cleanReposList = async () => {
    listElem.innerHTML = '';
};

export const renderRepos = async (reposList) => {
    try {
        cleanReposList();

        const reposListElems = await Promise.all(reposList.map(async ({ name }) => {
            const listElem = document.createElement('li');
            listElem.classList.add('repo-list__item');
            listElem.textContent = name;

            return listElem;
        }));

        listElem.append(...reposListElems);
    } catch (error) {
        console.error('Error rendering repos:', error.message);
    }
};
