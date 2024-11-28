const reasons = [
    "Me haces reír incluso en los días más difíciles.",
    "Eres mi mejor amigo y mi confidente.",
    "Tu sonrisa ilumina mi día.",
    "Admiro tu forma de ver la vida.",
    "Eres increíblemente amable y generoso.",
    "Tu apoyo incondicional me da fuerza.",
    "Me haces sentir especial cada día.",
    "Tu inteligencia me asombra.",
    "Eres mi compañero perfecto.",
    "Me encanta compartir momentos contigo.",
    "Tienes un corazón de oro.",
    "Me motivas a ser una mejor persona.",
    "Me haces sentir amado de una manera única.",
    "Tu pasión por la vida es inspiradora.",
    "Eres una persona increíblemente auténtica.",
    "Tu creatividad me deja sin palabras.",
    "Siempre estás ahí para escucharme.",
    "Tienes una sonrisa que es capaz de cambiar mi estado de ánimo.",
    "La forma en que cuidas de los demás es admirable.",
    "Tu amor me da paz.",
    "Compartir aventuras contigo es lo mejor.",
    "Eres una persona con un gran sentido de humor.",
    "Tu honestidad es una de tus mejores cualidades.",
    "Me encanta cómo haces que cada momento sea especial.",
    "Siempre sabes cómo alegrarme el día.",
    "Tus abrazos me hacen sentir en casa.",
    "Eres la persona que hace que todo valga la pena.",
    "Tu risa es la música más hermosa.",
    "Me encanta cómo sueñas en grande.",
    "Eres la razón por la que creo en el amor verdadero.",
    "Me fascina tu forma de pensar.",
    "Eres la mejor parte de mis días.",
    "Tienes una bondad que nunca deja de sorprenderme.",
    "Tu voz es como un consuelo para mí.",
    "Me haces querer ser la mejor versión de mí mismo.",
    "Me encanta cómo haces que todo se vea más brillante.",
    "Tu dedicación a tus sueños es admirable.",
    "Eres la persona con la que quiero envejecer.",
    "Tus pequeños gestos significan mucho para mí.",
    "Me haces sentir seguro y amado.",
    "Tienes un corazón lleno de amor y bondad.",
    "Tu presencia es todo lo que necesito.",
    "Me haces querer hacer más por ti.",
    "Tus sueños se han convertido en los míos.",
    "Eres mi lugar favorito en el mundo.",
    "Tu felicidad es lo que más me importa.",
    "Eres quien me hace querer ser mejor cada día.",
    "Tu ternura es única.",
    "Tienes una manera de hacer que todo sea más fácil.",
    "Eres el mejor regalo de la vida.",
    "Tu apoyo me impulsa a seguir adelante.",
    "Me gusta la forma en que ves el mundo.",
    "Eres quien hace que cada día sea una aventura.",
    "Tus ojos tienen el poder de hacerme olvidar todo.",
    "Siempre traes alegría donde quiera que vayas.",
    "Me encanta lo cuidadoso que eres con todos.",
    "Tu amor es mi mayor tesoro.",
    "Tus abrazos son mi lugar seguro.",
    "Eres el motivo por el que sonrío cada día.",
    "Me encanta cómo valoras las cosas importantes.",
    "Tu voz es lo más reconfortante para mí.",
    "Me haces sentir como si todo fuera posible.",
    "Eres la persona más increíble que he conocido.",
    "Tu amor me da esperanza.",
    "Gracias por ser tú.",
    "Eres el sueño que nunca supe que tenía.",
    "Me encanta cómo haces que todo parezca tan sencillo."

    // Agrega más razones aquí...
];

const startDate = new Date("2024-01-28T00:00:00"); // Cambia esta fecha a la fecha de inicio

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("weeks").textContent = weeks;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTime, 1000);

document.getElementById("generate-reason").addEventListener("click", () => {
    const reasonList = document.getElementById("reason-list");
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    const newReasonItem = document.createElement("li");
    newReasonItem.textContent = randomReason;
    newReasonItem.className = "reason-item";
    reasonList.appendChild(newReasonItem);
});

function showImage(imageSrc) {
    const imageDisplay = document.getElementById("image-display");
    const displayedImage = document.getElementById("displayed-image");
    displayedImage.src = imageSrc;
    imageDisplay.style.display = "block";
}