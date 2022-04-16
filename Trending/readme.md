## Assignment Name: : Project Phase 1



## Name: Ushneet Singh

## HTML CSS and Javascript styles guide for project Crypto


- [x] Document type
        - <!DOCTYPE html>
        - Css styles
        -Javascript js

- [x] Semantics
        -Using HTML according to its purpose is important for accessibility, reuse, and code efficiency reasons
         for example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.


- [x] Multimedia fallback
        -Provide alternative contents for multimedia.
         <img src="" alt="">
        - Images are present inside the packages 

- [x] General formatting
        -Use a new line for every block, list, or table element, and indent every such child element, indent them if they are child elements of a block, list, or table element.

- [x] Heading utilities
        -Use h1 – h6 to change an elements font size and weight to match our heading styles.

- [x] Connections 
        - Connections are made with all the tags and specific css and java script file is present        


## Resources 
- [x] https://www.coinbase.com/price/ethereum

- [x] https://www.coinbase.com/price/shiba-inu

- [x] https://coinmarketcap.com/currencies/polkadot-new/

- [x] https://www.coinbase.com/price/dogecoin?utm_source=google_search_nb&utm_medium=cpc&utm_campaign=15827880466&utm_content=131628347643&utm_term=&utm_creative=573612272631&utm_device=c&utm_placement=&utm_network=g&utm_location=9000945&gclid=Cj0KCQiAuvOPBhDXARIsAKzLQ8HLrvKGfUVKLEqF2cEeX3k8nxYLh6tVeYbpFhsaX7QajGtwtlkeysYaAg8xEALw_wcB

(given links are data descriptions of coinmarket website)

    
## CSS style guide

- [x] ID and class naming
        -Use meaningful or generic ID and class names
        #ID name {}
        .Class name {}

- [x]  properties
        - CSS offers a variety of properties (like font) that should be used whenever possible, 
        border-top-style: none;
        font-family: palatino, georgia, serif;
        font-size: 100%;
        line-height: 1.6;
        padding-bottom: 2em;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0  

- [x] Block content indentation
        -Indent all block content, that is rules within rules as well as declarations, so to reflect hierarchy and improve understanding.
                
                @media screen, projection {

                  html {
                    background: #fff;
                    color: #444;
                    }

                  }
       

- [x] Declaration stops
        -End every declaration with a semicolon for consistency and extensibility reasons.
            .Dec {
                display: block;
                height: 100px;
            }

- [x] Property name stops
        -Always use a single space between property and value 
        h1 {
        font-weight: bold;
        }

- [x] Selector and declaration separation
        -Separate selectors and declarations by new lines.
        h2,
        h3 {
        font-weight: normal;
        line-height: 1.2;
        }

- [x] Rule separation
        -Always put a line between rules.

html {
  background: #fff;
}

body {
  margin: auto;
  width: 100%;
}