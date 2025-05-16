from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def moonpay_webhook():
    data = request.json
    # Simulate verification
    return jsonify({'status': 'confirmed', 'data': data}), 200