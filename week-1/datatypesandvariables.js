/*
Premitive data types hold single values
data types
1. strings/Text
2. numbers
      integers
      decimal
3. boolean
     true/false
4. undefined
5. null
     let y = null
6. symbol
        uniquiness
7. big integers        
        */
        

        let productName = "timber"//strings we put them in quotes
        console.log(typeof(productName))
        


        let productCost = 3500
        productCost = 4000
        let transporIstnedded = true
        let tableColor
        let discount = null
        console.log(productCost *2)

        /*
        Non primitive Data types (they can be changed directly without reassining the value)
        1. Array
                is a list of items
                [numbers]
                [2,4,2,0]
                [string]
                ["string"]
                ["sofa","table","cupboard"]
        2. object
             in javascript everything is an object
              {name: "sofa"
                price:2000
                color:"black"
              }
             3. Date
              4. function
              
              
              */

              let productList =["sofa","table","cupboard"]
              console.log(productList)

              let diningTableObject ={
                productName: "Dining Table",
                quantity:2,
                price:350,
     
              }
      totalCost= diningTableObject.quantity * diningTableObject.price
              console.log(totalCost)
              let paymentType ="cash"
              const VAT =0.05
              const PI =3.14