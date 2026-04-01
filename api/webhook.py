from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

# 🔐 ВСТАВЬ СЮДА СВОЙ ПОЛНЫЙ ТОКЕН
TOKEN = 'f9LHodD0cOLOZI8Ch2Q7MszISpH1nlj_MHzijGbHpu0cJULDfQhezUL6_33YwQheq3AmcOOSWfqiABnK2ew55'
WEB_APP_URL = 'https://atoez.github.io/orehizakazi/'
API_URL = 'https://platform-api.max.ru'

@app.route('/webhook', methods=['POST'])
def webhook():
    try:
        data = request.json
        print(f"Получено событие: {data}")
        
        # Событие когда пользователь нажал старт
        if data.get('type') == 'bot_started':
            user_id = data['payload']['user_id']
            send_welcome(user_id)
        
        # Событие когда пользователь написал сообщение
        elif data.get('type') == 'message_created':
            user_id = data['payload']['user_id']
            text = data['payload'].get('text', '')
            
            if text == '/start':
                send_welcome(user_id)
        
        return jsonify({'success': True})
    except Exception as e:
        print(f"Ошибка в webhook: {e}")
        return jsonify({'error': str(e)}), 500

def send_welcome(user_id):
    try:
        url = f'{API_URL}/messages?user_id={user_id}'
        
        message = """🥜 Добро пожаловать в «Сладкий уголок»!

🌰 Орехи, сухофрукты и сладости в Кирове
🚚 Доставка за 24 часа
💰 Цены от 33₽ за 100гр

👇 Нажмите кнопку чтобы открыть каталог:
"""
        
        data = {
            'text': message,
            'attachments': [{
                'type': 'inline_keyboard',
                'payload': {
                    'buttons': [[{
                        'type': 'web_app',
                        'text': '🛒 Открыть каталог',
                        'url': WEB_APP_URL
                    }]]
                }
            }]
        }
        
        headers = {
            'Authorization': TOKEN,
            'Content-Type': 'application/json'
        }
        
        response = requests.post(url, json=data, headers=headers, timeout=10)
        print(f"Ответ API: {response.status_code} - {response.text}")
    except Exception as e:
        print(f"Ошибка отправки: {e}")

@app.route('/')
def index():
    return 'Бот работает! ✅'

# ❌ УДАЛИ ЭТОТ БЛОК (не нужен на Render):
# if __name__ == '__main__':
#     app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
