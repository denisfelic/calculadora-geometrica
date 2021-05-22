


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

const triangleObject = {

    start: () => {

        document.querySelector('.triangulo-tab > div button')
            .addEventListener('click', () => {

                let inputs = document.querySelectorAll('.triangulo-tab > div > label > input')

                const triangle = getTriangleData(inputs)
                updateTriangleOutput(triangle)

                // TODO: Salvar o objeto triangulo
                console.log(triangle)
            })


        function getTriangleData(inputData) {
            let triangle = {
                sideA: inputData[0].value,
                sideB: inputData[1].value,
                sideC: inputData[2].value,
                height: inputData[3].value,
                width: inputData[4].value,
            }

            triangle = calculateTriangle(triangle)
            return triangle
        }


        function updateTriangleOutput(triangle) {
            document.querySelectorAll('.triangulo-tab > .triangle-outputBox > h2 > span')[0].innerHTML = triangle.perimeter
            document.querySelectorAll('.triangulo-tab > .triangle-outputBox > h2 > span')[1].innerHTML = triangle.area

        }


        function calculateTriangle(triangleData) {
            let triangle = triangleData
            let { sideA, sideB, sideC, width, height } = triangle
            triangle.perimeter = Number(sideA) + Number(sideB) + Number(sideC)
            triangle.area = width * height / 2
            return triangle
        }
    }

}

loadTabsBehaviour()
triangleObject.start()
ObjectSave.fillTextAreaBehavior()
ObjectSave.downloadObjectsBehavior()