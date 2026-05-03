import { updateAchievements } from './achievements.js';

// Данные курсов
const coursesData = {
    1: {
        id: 1,
        title: "Английский язык. Введение",
        level: "beginner",
        levelText: "Начинающий",
        lessons: [
            {
                id: 1,
                title: "Введение в английский язык",
                theory: `
                    <h2>Алфавит и произношение</h2>
                    <p>Английский алфавит состоит из 26 букв. Освоение алфавита - первый шаг к изучению языка.</p>
                    
                    <h3>Английский алфавит:</h3>
                    <p>Aa, Bb, Cc, Dd, Ee, Ff, Gg, Hh, Ii, Jj, Kk, Ll, Mm, Nn, Oo, Pp, Qq, Rr, Ss, Tt, Uu, Vv, Ww, Xx, Yy, Zz</p>
                    
                    <h3>Основные звуки:</h3>
                    <ul>
                        <li>[æ] - как в слове "cat" (кэт) - кот</li>
                        <li>[ʌ] - как в слове "cup" (кап) - чашка</li>
                        <li>[iː] - как в слове "see" (си) - видеть</li>
                        <li>[e] - как в слове "bed" (бэд) - кровать</li>
                    </ul>
                    
                    <div class="example">
                        <strong>Примеры для практики:</strong><br>
                        cat - кот<br>
                        dog - собака<br>
                        sun - солнце
                    </div>

                    <h2>Личные местоимения и глагол to be</h2>
                    <p>Личные местоимения указывают на лицо или предмет, о котором идёт речь.</p>
                    
                    <h3>Личные местоимения:</h3>
                    <ul>
                        <li>I - я</li>
                        <li>you - ты / вы</li>
                        <li>he - он</li>
                        <li>she - она</li>
                        <li>it - оно</li>
                        <li>we - мы</li>
                        <li>they - они</li>
                    </ul>
                    
                    <h3>Глагол to be (быть, находиться):</h3>
                    <ul>
                        <li>I am - я есть / я нахожусь</li>
                        <li>you are - ты есть</li>
                        <li>he / she / it is - он / она / оно есть</li>
                        <li>we are - мы есть</li>
                        <li>they are - они есть</li>
                    </ul>
                    
                    <div class="example">
                        <strong>Примеры:</strong><br>
                        I am a student. - Я студент.<br>
                        She is happy. - Она счастлива.<br>
                        We are friends. - Мы друзья.
                    </div>
                `
            }
        ]
    },
    2: {
        id: 2,
        title: "Английский язык. Времена",
        level: "intermediate",
        levelText: "Средний",
        lessons: [
            {
                id: 1,
                title: "Present Simple и Present Continuous",
                theory: `
                    <h2>Present Simple (Настоящее простое время)</h2>
                    <p>Используется для описания обычных, регулярных действий, фактов и привычек.</p>
                    
                    <h3>Образование:</h3>
                    <ul>
                        <li>I/You/We/They + глагол (без изменений)</li>
                        <li>He/She/It + глагол + -s</li>
                    </ul>
                    
                    <h3>Примеры:</h3>
                    <ul>
                        <li>I work every day. - Я работаю каждый день.</li>
                        <li>She speaks English. - Она говорит по-английски.</li>
                        <li>The sun rises in the east. - Солнце встаёт на востоке.</li>
                    </ul>
                    
                    <h3>Слова-маркеры:</h3>
                    <p>always, usually, often, sometimes, never, every day/week/month</p>
                    
                    <div class="example">
                        <strong>Примеры для практики:</strong><br>
                        I always drink coffee in the morning.<br>
                        They go to the gym on Mondays.<br>
                        He reads books every evening.
                    </div>
                    
                    <h2>Present Continuous (Настоящее длительное время)</h2>
                    <p>Используется для описания действий, происходящих прямо сейчас или в текущий период времени.</p>
                    
                    <h3>Образование:</h3>
                    <p>am/is/are + глагол + -ing</p>
                    
                    <h3>Примеры:</h3>
                    <ul>
                        <li>I am reading a book now. - Я читаю книгу сейчас.</li>
                        <li>She is studying for exams this week. - Она готовится к экзаменам на этой неделе.</li>
                    </ul>
                    
                    <h3>Слова-маркеры:</h3>
                    <p>now, at the moment, today, this week/month</p>
                    
                    <div class="example">
                        <strong>Сравнение:</strong><br>
                        I work (обычно) - I am working (прямо сейчас)<br>
                        She cooks (вообще) - She is cooking (в данный момент)
                    </div>
                `
            },
            {
                id: 2,
                title: "Past Simple и Future Simple",
                theory: `
                    <h2>Past Simple (Прошедшее простое время)</h2>
                    <p>Используется для описания завершённых действий в прошлом.</p>
                    
                    <h3>Образование правильных глаголов:</h3>
                    <p>глагол + -ed</p>
                    
                    <h3>Примеры правильных глаголов:</h3>
                    <ul>
                        <li>work → worked</li>
                        <li>play → played</li>
                        <li>study → studied</li>
                    </ul>
                    
                    <h3>Неправильные глаголы (нужно запомнить):</h3>
                    <ul>
                        <li>go → went</li>
                        <li>eat → ate</li>
                        <li>see → saw</li>
                        <li>have → had</li>
                        <li>be → was/were</li>
                    </ul>
                    
                    <h3>Примеры:</h3>
                    <ul>
                        <li>I visited London last year. - Я посетил Лондон в прошлом году.</li>
                        <li>She went to the cinema yesterday. - Она ходила в кино вчера.</li>
                    </ul>
                    
                    <h3>Слова-маркеры:</h3>
                    <p>yesterday, last week/month/year, ago, in 2020</p>
                    
                    <div class="example">
                        <strong>Примеры для практики:</strong><br>
                        I watched an interesting film yesterday.<br>
                        They arrived two hours ago.<br>
                        She bought a new car last month.
                    </div>
                    
                    <h2>Future Simple (Будущее простое время)</h2>
                    <p>Используется для описания действий, которые произойдут в будущем.</p>
                    
                    <h3>Образование:</h3>
                    <p>will + глагол (без изменений)</p>
                    
                    <h3>Примеры:</h3>
                    <ul>
                        <li>I will call you tomorrow. - Я позвоню тебе завтра.</li>
                        <li>She will be a doctor. - Она будет врачом.</li>
                        <li>We will travel to Paris next summer. - Мы поедем в Париж следующим летом.</li>
                    </ul>
                    
                    <h3>Сокращённая форма:</h3>
                    <p>will = 'll (I'll, you'll, she'll, etc.)</p>
                    
                    <h3>Отрицательная форма:</h3>
                    <p>will not = won't</p>
                    
                    <h3>Слова-маркеры:</h3>
                    <p>tomorrow, next week/month/year, soon, in the future</p>
                    
                    <div class="example">
                        <strong>Все три времени в сравнении:</strong><br>
                        I work every day. (Present Simple - обычно)<br>
                        I am working now. (Present Continuous - сейчас)<br>
                        I worked yesterday. (Past Simple - вчера)<br>
                        I will work tomorrow. (Future Simple - завтра)
                    </div>
                `
            }
        ]
    }
};

let currentCourse = null;
let currentLessonId = null;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = parseInt(urlParams.get('id'));
    
    if (courseId && coursesData[courseId]) {
        currentCourse = coursesData[courseId];
        loadProgress();
        renderCourse();
    } else {
        window.location.href = 'courses.html';
    }
});

function loadProgress() {
    const savedProgress = JSON.parse(localStorage.getItem('languege_completed_lessons') || '{}');
    const completedLessons = savedProgress[currentCourse.id] || [];
    
    if (completedLessons.length > 0) {
        currentLessonId = completedLessons[completedLessons.length - 1];
    } else {
        currentLessonId = currentCourse.lessons[0].id;
    }
}

function markLessonCompleted(lessonId) {
    const savedProgress = JSON.parse(localStorage.getItem('languege_completed_lessons') || '{}');
    let completedLessons = savedProgress[currentCourse.id] || [];
    
    if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
        savedProgress[currentCourse.id] = completedLessons;
        localStorage.setItem('languege_completed_lessons', JSON.stringify(savedProgress));
        return true;
    }
    return false;
}

function renderCourse() {
    const container = document.getElementById('courseContainer');
    const currentLesson = currentCourse.lessons.find(l => l.id === currentLessonId);
    const currentIndex = currentCourse.lessons.findIndex(l => l.id === currentLessonId);
    const completedLessons = JSON.parse(localStorage.getItem('languege_completed_lessons') || '{}')[currentCourse.id] || [];
    
    const lessonsSelect = `
        <div class="lessons-selector">
            <label class="selector-label">Выберите урок:</label>
            <select id="lessonSelect" class="lesson-select">
                ${currentCourse.lessons.map((lesson, idx) => `
                    <option value="${lesson.id}" ${lesson.id === currentLessonId ? 'selected' : ''} 
                            ${completedLessons.includes(lesson.id) ? 'data-completed="true"' : ''}>
                        Урок ${idx + 1}: ${lesson.title} ${completedLessons.includes(lesson.id) ? '✓' : ''}
                    </option>
                `).join('')}
            </select>
        </div>
    `;
    
    const nextLessonExists = currentIndex + 1 < currentCourse.lessons.length;
    const isLastLesson = !nextLessonExists;
    
    container.innerHTML = `
        <div class="course-header">
            <h1>${escapeHtml(currentCourse.title)}</h1>
            <div class="course-badge ${currentCourse.level}">${currentCourse.levelText}</div>
        </div>

        ${lessonsSelect}

        <div class="theory-content">
            <h2>${escapeHtml(currentLesson.title)}</h2>
            ${currentLesson.theory}
        </div>

        <div class="course-actions">
            <button class="btn btn-primary" id="nextLessonBtn">
                ${nextLessonExists ? 'Следующий урок →' : 'Завершить курс'}
            </button>
            <a href="courses.html" class="btn btn-outline">Выйти</a>
        </div>
    `;
    
    const lessonSelect = document.getElementById('lessonSelect');
    if (lessonSelect) {
        lessonSelect.addEventListener('change', (e) => {
            currentLessonId = parseInt(e.target.value);
            renderCourse();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    const nextBtn = document.getElementById('nextLessonBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const wasUpdated = markLessonCompleted(currentLessonId);
            
            if (nextLessonExists) {
                // Это НЕ последний урок - обновляем достижения сразу
                if (wasUpdated) {
                    updateAchievements();
                }
                currentLessonId = currentCourse.lessons[currentIndex + 1].id;
                renderCourse();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Это последний урок - отложим проверку достижений после перехода
                if (wasUpdated) {
                    localStorage.setItem('languege_check_achievements', 'true');
                }
                window.location.href = 'courses.html';
            }
        });
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}