const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJnn3tlToyyROavEqGCj5rqgIsjL54d4jZiKt15y0RY_vwXgwpQLJs4N4LzcM4XWn2Q1vB0fUSq5q2SeBnPI7d4qkQjChktrpYWN0R8-Bi6J0sNfR4UAq7p7_RRwCxVYSygRx5kBBXAbWHVM50UIn6Q81s3Hcfw5y1oXEAm_1um3oMqKMjkrQ_BGnuic-a/s320/KakaoTalk_20240531_151643160.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCA20GnDdrSUJMMVi2-pacNy1BnD_LP91DzMhmnGD_EVa2asHn72R9mLpeviS1GRzWhTwLgX6baUWbbBSsZoElYCfVSrdMr49P4KXeJWC_ijcv4kyWmtkzFOAsAtNwi2YiXdjjNehBvaXl5CuKVa0vAQGxOx5LWchGW-nU2SVyelmy6GUwUxb86GdKsIKX/s320/KakaoTalk_20240531_142310128.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIgZ7p_I7q-S_8BUFjntIRLhcHJ3MGQlH5M6HiIH-ZwqWsymf0YV_3kh4LF3f-9sqs0XN5LUxbN9gZT6Dq2MHa_hyphenhyphenVwHaSOYAVjvIg5ACzGZCfa5eCkZtsx_UR2bNa1Kq6dfkNJaEBtk56fwBqVX6yTdRWJs5vXyMDStqNtTtYJ3NurvYJ55eeogldenXh/s320/KakaoTalk_20240531_151643160_01.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0w2Ddi1swfNKDpaBqvOvqZamNfBatgTbyYtXzgEUod_Y04EfZ6vVMjFD1AgVzg1cPlstWhUlPmkr8C5cMBi3ffVBMpb8rtVJhZT4b_32zF_1JyjEMtenPrj9YSmtu6EqU-r6odFI5CHtcz7gRQo9Y2-GwL7ZkSQQNyCzMMF3hTCPbKExVD25jy2Gnv7Lw/s320/KakaoTalk_20240531_142310128_01.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZXRitD8mfQ8S6u_rKQtq5p97_k1xXSlYE2wAX1cJ0HCdvKVjZmQXBUmbVsk2bDw-5uGg0M7VKXSo3z4U4fWQIDeNiuaFzAtjjgmumSY8kTMhwLCiWlqmsVQF1-LDC_7GFe5xS5_bCNbvHhxkPlEWUSlk17mcu9YHGNS4992c1RjLwEOfYZOjuDGoWpva5/s320/KakaoTalk_20240531_151643160_02.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjm0adZUs_dItkcJRrIlyEdfYh28D_VAZ3IQkqJKnLfF9rlW1eihC2erKPNe_N7JzfVEMNFpiAK8VfkwS4s_1YrevmWmkCockaT6rPYrYIZqq0b3Ri7HAaTBEWcMXYh1Px4qRxzgYsiVo9Y0HIqLwGfnuen_hK7MuaZGxzyPTU9Y6SVRXIsYwXX6mKI_s1V/s320/KakaoTalk_20240531_142310128_02.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2wp2Y6H7yLGdnopYZr1ISyCiOTKi5N_iE1MjFw1JyuQPK_gXZ1956ojhrXEzMkA6t6E_xmSdSCBTytncUpGBIHU26WlXaslNrYN1l9jwiPQ6r12A6cBufGRLpUMPDk3AVMUeLfG75dpt5dHWgk60urI344gR-zqn9vnFSkb-wZybP8ChPIOl3q6ZRNQd2/s320/KakaoTalk_20240531_151643160_03.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrKJAE6wmn3cGCMzHoFjkUpEZ6ChsNmilSX3c67rt9PebQ9Q4UkRixnnRDxHoUOsCv-rXYswpT_KRcOpLDzD448vOM7jw0v2Q3rN9PE2uZvCNe0P2Xgh0yhzXQnCDBW99XEHwGDrEM2JULYkpeHKL2mt5XOJmha3drdA16LLto6qtpJL_pOeHAYUzuWzDx/s320/KakaoTalk_20240531_142310128_03.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjZk1sMZ7VQGE410gByR0_9UZpGP_HMl_ybsHV7JNbWe3-gDoZjHyuSfdqXxg9oSti7DFuUOEFVLBR5ZfdCOj3NQM3SgoUELkymVjjuviOmGzua63CYDKHjXx2Wa5fEu2rQjm5KWPESRbj5kUf7-z1M99OvuU8XtmEz5zhicnxf2M8fPFvi_Mdecdj9k1O/s320/KakaoTalk_20240531_151643160_04.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQsTHh4RJkIWyloP1lTZX8DxIFgnTbJMMVfEZ-iaTxm8bwMXcK7kadfxmrTV7PZ3g7k8-Idug-M2WvHCzzQyV3aImPO2kqqCY6CBwGkdWWaxWM-pnMVL2lA-l-VEfHQvCuUHnRWrJYHtB2RoZvPjvcDunVrDOut9qE-IqUrdKeuBso7bQo43KA1lpRThVE/s320/KakaoTalk_20240531_142310128_04.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgOfW5XU4LptAcW2i14UqdmKMRlSdcLPcHPE8wwbA-ugTVf4vOYiWceTKNlxXVU__9s9YRrC23f9nWXpTiYxZEHQbvW3rVc3ow3gJ-Bo_wZ5Rqkikj4S4gDEsDx243M9A7hI-KeVatSW2XmZljtpST7lbr77QA0efC8fgkWc0sw5FO396fs8Un0PGGvpHG3/s320/KakaoTalk_20240531_151643160_05.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNjn2CJkpjtV7uVH1U_c1V5V8O08ddsX83JbU6JICHnRAHhmVyVOnChC5-rEhmKTTrgOB0h9xO3hiVWlvL4_k4KvrauaK9NNPUivFEpX8QIjOAU1FGX0LxgZCSexupXuUfCPnhAGnoYiqXoTkCSqZECDuDfbYB_hbGCBYeMdHbOmvO1w6VETt_jrbZK5iP/s320/KakaoTalk_20240531_142310128_05.jpg",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhriiCCIzB_3Fa-5xn2KwC-3Jj2KTnQpr3jDEl1LysqR_v4JfziKNaRFmjSOcb55HueBQ2pVyehEU68srdvdLaVv4ZJD95ySsZCdiAwdZ_fcwFfctrzTmfF-WmXiCW7VfZuV3l6FR0h-hZhjLzH_Kem22zgkeDOnRhU3IPqrzWV9oscKUvSP5dxWEvtRQVe/s320/KakaoTalk_20240531_151643160_06.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPQdHAYACk9FuqGkaK25TPV9KtFnsEhcmhTIZxSxWrrlapAbzuPwLXy0FAo5Qc0jehpuOPbSpStTaEROMjPxuLqIzJcU5s9e7v87Flifo69KFJ-1G1caWC6zcORsY0goKAD2kTey0bgMe8mzCxkiX4kdUtjqrSAjeITmFz7aroLZMQtX27IhYdpBfD-HGB/s320/KakaoTalk_20240531_142347296.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIx_Gy8eJgn_lO-eg8sXcDfsK286S2UoQm0ahPNLpa85tUk-ojG3m8ylVVQy4Ooq33MJGONmus8NCJXjRIaffdIi3MjZeYTLHDkIJDAyAi1VYDbadFjzvaB_emGi35zkbEZ6FMivR5b9sPOB0aYIkSnAawtCsjeglreBkRIQGZtUSsIrhXxE9wwiblfYhe/s320/KakaoTalk_20240531_151643160_07.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicD18p-Cj8yTQmF8-7lVIwoAhGDy5NoUime5fZC4jo_Jo2YcQ2kZWlbNgclMPEc6AresQTIx5zY6afdR6ceTMkoX8yfRbgZuoiUWnAXP6i3FgST8IvaG_sMsn36kDWN5fQCSML9N4_nOLbchXw0lE3-fMWgJ-aiiNwzcsrzfbMAGAHynNsrYQ9ig9wgHaA/s320/KakaoTalk_20240531_142409299.jpg",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();