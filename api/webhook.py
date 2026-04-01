from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

TOKEN = 'f9LHodD0cOLOZI8Ch2Q7MszISpH1nlj_MHzijGbHpu0cJULDfQhezUL6_33YwQheq3AmcOOSWfqiABnK2ew55'
WEB_APP_URL = 'https://atoez.github.io/orehizakazi/'
API_URL = 'https://platform-api.max.ru'

@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    print(f"=== WEBHOOK ПОЛУЧЕН ===")
    print(f"Событие: {data}")
    
    if data.get('type') == 'bot_started':
        user_id = data['payload']['user_id']
        print(f"Бот запущен пользователем: {user_id}")
        send_welcome(user_id)
    
    elif data.get('type') == 'message_created':
        user_id = data['payload']['user_id']
        text = data['payload'].get('text', '')
        print(f"Сообщение от {user_id}: {text}")
        
        if text == '/start':
            send_welcome(user_id)
    
    return jsonify({'success': True})

def send_welcome(user_id):
    print(f"Отправляем приветствие пользователю {user_id}")
    
    url = f'{API_URL}/messages'
    
    message = """🥜 Добро пожаловать в «Сладкий уголок»!

🌰 Орехи, сухофрукты и сладости в Кирове
🚚 Доставка за 24 часа
💰 Цены от 33₽ за 100гр

👇 Нажмите кнопку чтобы открыть каталог:
"""
    
    data = {
        'user_id': user_id,
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
    
    print(f"Отправляем запрос на: {url}")
    response = requests.post(url, json=data, headers=headers, timeout=10)
    print(f"Ответ API: {response.status_code} - {response.text}")

@app.route('/')
def index():
    return 'Бот работает! ✅'
