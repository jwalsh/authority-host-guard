r = requests.get('https://api.github.com/user', auth=('user', 'pass'))
r.text
