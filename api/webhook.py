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
    print(f"Полные данные: {data}")
    
    user_id = None
    
    # Получаем user_id из разных возможных полей
    if data.get('type') == 'bot_started':
        user_id = data.get('payload', {}).get('user_id') or data.get('user_id')
        print(f"🚀 Бот запущен, user_id: {user_id}")
    
    elif data.get('type') == 'message_created':
        user_id = data.get('payload', {}).get('user_id') or data.get('user_id')
        text = data.get('payload', {}).get('text') or data.get('text', '')
        print(f"💬 Сообщение от {user_id}: {text}")
        
        if text == '/start':
            print("✅ Команда /start обнаружена")
    
    if user_id:
        send_welcome(user_id)
    
    return jsonify({'success': True})

def send_welcome(user_id):
    print(f"📤 Отправляем приветствие пользователю {user_id}")
    
    message = """🥜 Добро пожаловать в «Сладкий уголок»!

🌰 Орехи, сухофрукты и сладости в Кирове
🚚 Доставка за 24 часа
💰 Цены от 33₽ за 100гр

👇 Нажмите кнопку чтобы открыть каталог:
"""
    
    # Пробуем разные форматы отправки
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
    
    # Пробуем основной endpoint
    url = f'{API_URL}/messages'
    print(f"🔗 Отправляем на: {url}")
    
    try:
        response = requests.post(url, json=data, headers=headers, timeout=10)
        print(f"✅ Ответ API: {response.status_code}")
        print(f"📄 Тело ответа: {response.text}")
    except Exception as e:
        print(f"❌ Ошибка запроса: {e}")

@app.route('/')
def index():
    return 'Бот работает! ✅'
