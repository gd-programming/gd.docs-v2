# Important Info

> When interacting with Geometry Dash's Private API, there are a set of rules which you must follow. Failure to follow these rules will result in the error `-1`

## Sending requests

To make a successful request to the Geometry Dash servers, there are a couple factors to consider:

- Cloudflare
- Request Type
- Rate Limits

<b>Cloudflare</b>  
The Geometry Dash servers are protected using a service called [Cloudflare](https://www.cloudflare.com/). In order to send a successful request, bypassing cloudflare is essential. In order to bypass cloudflare there are two steps.

- You must send the request to the `www.` subdomain.
- You must send the request using the `HTTP` protocol, not `HTTPS`
- You must send the request with an empty user-agent

If you don't follow these steps, cloudflare will block the request and you will recieve an HTTP error code: `1020`

<b>Request Type</b>  
In 99% of cases, Geometry Dash requires you to send `POST` request. The request parameters require the following Content Type: `Content-Type: application/x-www-form-urlencoded`. 
- The parameters required will be detailed in their respective sections.  

<b>Rate Limits</b>  
One thing to be mindful about is the number of requests you send at a given time. Sending too many requests will result in you becoming rate limited and not being able to send any more requests for a certain duration. As the number of requests required to start a rate limit changes, we are unable to provide exact numbers
