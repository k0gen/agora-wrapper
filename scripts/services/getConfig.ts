import { compat, types as T } from "../deps.ts";

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
  "tor-address": {
     "name": "Network Tor Address",
     "description": "The Tor address for the network interface.",
     "type": "pointer",
     "subtype": "package",
     "package-id": "agora",
     "target": "tor-address",
     "interface": "main"
  },
  "directory": {
     "name": "Directory Path",
     "description": "The path to the directory in File Browser that will be served on your Agora .onion address. For example, a value of \"satoshi-files\" would tell Agora to look for that directory or create it in File Browser.",
     "type": "string",
     "pattern": "^(\\.|[a-zA-Z0-9_ -][a-zA-Z0-9_ .-]*|([a-zA-Z0-9_ .-][a-zA-Z0-9_ -]+\\.*)+)(/[a-zA-Z0-9_ -][a-zA-Z0-9_ .-]*|/([a-zA-Z0-9_ .-][a-zA-Z0-9_ -]+\\.*)+)*/?$",
     "pattern-description": "Must be a valid relative file path",
     "nullable": false,
     "default": "agora-files"
  },
  "payments": {
     "type": "boolean",
     "name": "Enable Lightning Network payments",
     "description": "Decide whether to charge for files via Lightning or make them freely available.",
     "default": true
  },
  "price": {
     "type": "number",
     "name": "Price for files in satoshis",
     "nullable": false,
     "range": "[1,10000000]",
     "integral": true,
     "units": "satoshis",
     "description": "The amount of satoshis users will pay per each file you host on Agora.",
     "default": 500
  },
  "wallet": {
    "type": "union",
    "name": "Connection Settings",
    "description": "Connection Settings",
    "tag": {
        "id": "type",
        "name": "Select Lightning Node",
        "variant-names": {
            "lnd": "Lightning Network Daemon",
            "cln": "Core Lightning",
        },
        "description":
            "The LN node to connect to",
        },
    "default": "lnd",
    "variants": {
      "lnd": {},
      "cln":{},
    }
  }
});