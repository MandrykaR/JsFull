export const getTitle = () => {
    const elemsTitle = document.querySelector('.title').textContent;
    return elemsTitle;
}

getTitle();

export const getDescription = () => {
    const elemsPlans = document.querySelector('.about');
    return elemsPlans.innerText;
}

getDescription();

export const getPlans = () => {
    const elemsPlans = document.querySelector('.plans').innerHTML;
    return elemsPlans;
}

getPlans();

export const getGoal = () => {
    const elemsGoal = document.querySelector('.goal').outerHTML;
    return elemsGoal;
}

getGoal();


