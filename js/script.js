function ToggleVisibility(number) 
{
    const element = document.getElementById("explanation_" + number);
    element.classList.toggle('hideElement');
}