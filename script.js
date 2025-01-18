// Preguntas y respuestas
const questions = [
    {
      question: "¿Qué teoría de la vida sugiere que la vida fue creada por un ser divino?",
      answers: [
        { text: "Creacionismo", correct: true },
        { text: "Panspermia", correct: false },
        { text: "Litopanspermia", correct: false },
        { text: "Radiopanspermia", correct: false }
      ]
    },
    {
      question: "¿Qué es la biología?",
      answers: [
        { text: "Es la ciencia que estudia a los minerales", correct: false },
        { text: "Es la ciencia que estudia a los seres vivos", correct: true },
        { text: "Es el estudio de los fenómenos climáticos", correct: false },
        { text: "Es la ciencia que estudia a los astros", correct: false }
      ]
    },
    {
      question: "¿Qué postula la hipótesis de la panspermia?",
      answers: [
        { text: "Que la vida fue creada por un ser divino", correct: false },
        { text: "Que la vida surge espontáneamente de materia inerte", correct: false },
        { text: "Que la vida se originó en el espacio", correct: true },
        { text: "Que los microorganismos se desarrollaron en la Tierra hace millones de años", correct: false }
      ]
    },
    {
      question: "¿Qué propone la hipótesis de la panspermia dirigida?",
      answers: [
        { text: "Que la vida viaja en fragmentos de roca", correct: false },
        { text: "Que la vida fue sembrada por una civilización extraterrestre avanzada", correct: true },
        { text: "Que la vida surgió por la radiación estelar", correct: false },
        { text: "Que la vida se generó de manera espontánea en la Tierra", correct: false }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function startQuiz() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    // Obtener la pregunta actual
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    // Limpiar opciones anteriores
    optionsElement.innerHTML = "";
  
    // Crear botones para cada opción
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.onclick = () => checkAnswer(answer.correct);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(isCorrect) {
    if (isCorrect) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        showResult("¡Felicidades! Has completado la encuesta.");
      }
    } else {
      showResult("Respuesta incorrecta. Volviendo al inicio...");
      setTimeout(resetQuiz, 2000); // Reinicia después de 2 segundos
    }
  }
  
  function showResult(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
    resultElement.classList.remove("hidden");
    document.getElementById("options").innerHTML = ""; // Ocultar opciones
  }
  
  function resetQuiz() {
    currentQuestionIndex = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("quiz").classList.add("hidden");
  }