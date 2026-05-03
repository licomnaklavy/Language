/**
 * notifications.js
 * Система уведомлений для достижений
 */

class AchievementNotifier {
    constructor() {
        this.container = null;
        this.activeNotifications = [];
        this.init();
    }

    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.className = 'notifications-container';
            this.container.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
                gap: 10px;
                pointer-events: none;
            `;
            document.body.appendChild(this.container);
        }
    }

    showAchievement(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.style.pointerEvents = 'auto';
        
        notification.innerHTML = `
            <div class="notification-icon">🏆</div>
            <div class="notification-content">
                <div class="notification-title">Достижение получено</div>
                <div class="notification-name">${achievement.title}</div>
                <div class="notification-desc">${achievement.description}</div>
            </div>
        `;
        
        notification.onclick = () => {
            this.close(notification);
            // Прокручиваем к достижениям в профиле
            const achievementsSection = document.querySelector('.achievements-section');
            if (achievementsSection) {
                achievementsSection.scrollIntoView({ behavior: 'smooth' });
            }
        };
        
        this.container.appendChild(notification);
        this.activeNotifications.push(notification);
        
        // Автоматическое закрытие через 5 секунд
        setTimeout(() => {
            this.close(notification);
        }, 5000);
    }
    
    close(notification) {
        if (notification && notification.parentNode) {
            notification.style.animation = 'notificationSlideOut 0.3s ease forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
                const index = this.activeNotifications.indexOf(notification);
                if (index > -1) {
                    this.activeNotifications.splice(index, 1);
                }
            }, 300);
        }
    }
}

// Создаём глобальный экземпляр
window.achievementNotifier = new AchievementNotifier();