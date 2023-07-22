// console.log("Hello World")

document.addEventListener('DOMContentLoaded',displayFitnessTips)

function displayFitnessTips(){
    const fitnes_section = document.getElementById("fitness-tips");
    const FitnessTips =[
        // 'Stay hydrated during your workouts.',
        // 'Remember to warm up and cool down before and after exercise.',
        // 'Do not forget to listen to your body and take rest days when needed.',
        // 'Incorporate strength training exercises for overall fitness.',
        // 'Make sure to include a variety of exercises to target different muscle groups.',
        // ' Don’t Skip Meals',
        // 'Don’t Wait Till You Are Hungry'
    ]
    FitnessTips.push("Don’t Wait Till You Are Hungry");
    FitnessTips.push("Remember to warm up and cool down before and after exercise.");

    FitnessTips.push("Do not forget to listen to your body and take rest days when needed");
    FitnessTips.push("Incorporate strength training exercises for overall fitness");
    FitnessTips.push("Make sure to include a variety of exercises to target different muscle groups.");
    FitnessTips.push("Don’t Skip Meals");



    const randomIndex = Math.floor(Math.random() * FitnessTips.length);
    const tipElement = document.createElement('p');   
    tipElement.textContent = FitnessTips[randomIndex];
    fitnes_section.appendChild(tipElement);

}