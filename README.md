# Tesla API

Welcome to the Tesla API repository! This API provides custom-made data related to Tesla cars, allowing developers to integrate Tesla car information into their projects seamlessly. Whether you're building a Tesla car enthusiast website, a mobile app, or conducting data analysis, this API offers endpoints to access a variety of Tesla car data.

## Endpoints
### Get Specific Car Information
#### Endpoint: ```GET /Car/:model```
```json
{
  "ChargingOffer": "Receive three years of unlimited free Supercharging with purchase of a new Model S or Model X.",
  "Range": "405",
  "top_speed": "149",
  "accelaration": "3.1",
  "UpgradeSpecs": {
    "name": "Model S Plaid",
    "price": {
      "nonPlaid": 93740,
      "Plaid": 108490
    },
    "upgradeType": "Plaid Upgrade",
    "features": [
      "Quickest accelerating car in production today",
      "0-60 mph: 1.99s",
      "1/4 mile: 9.23@155 mph trap speed",
      "1,020 horsepower"
    ]
       More Data...
  }
}
```
#### Parameters:
```:model``` - The model of the Tesla car (e.g., Model S, Model 3, Model X, Model Y).
Description:
Retrieves detailed information about a specific Tesla car based on its model.



