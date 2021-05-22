import triangleObject from './triangle.js'
import ObjectSave from './object-save.js'

function loadTabsBehaviour() {
    const contentTabs = document.querySelectorAll('.tab-content')
    document.querySelectorAll('.sidebarMenu-tabsBox > button').forEach((btn, i) => {
        btn.addEventListener('click', () => {


            contentTabs.forEach((tab, tab_index) => {
                if (tab_index === i) {
                    tab.style.display = 'flex'
                }
                else {
                    tab.style.display = 'none'
                }
            })
        })
    })

}



loadTabsBehaviour()
triangleObject.start()
ObjectSave.fillTextAreaBehavior()
ObjectSave.downloadObjectsBehavior()