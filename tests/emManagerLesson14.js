var eMObPage = {}

var info =[
{
    name: 'Banner',
    phone: '1234567890',
    email: 'hulk@avenger.com',
    title: 'The Hulk',
},
]
var info2 =[
{

    name: 'Groot',
    phone: '1800596900',
    email: 'IamGroot@avenger.com',
    title: 'Groot',
}

] 



module.exports = {
    beforeEach: browser => {
        eMObPage = browser.page.eMOb()
        eMObPage.navigate()
    },
    after: browser => {
        eMObPage.end()
    },
    
   
   
    'Test to Edit Hulk': browser => {
        info.forEach(edit=>{
            eMObPage.changeName(edit)
        })
        





    },
    'Add New Employee': browser => {
        info2.forEach(edit=>{
            eMObPage.addName(edit)
        })


    }

}