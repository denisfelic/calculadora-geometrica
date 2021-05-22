import ObjectSave from "./object-save.js"

const triangleObject = {

    start: () => {

        document.querySelector('.triangulo-tab > div button')
            .addEventListener('click', () => {

                let inputs = document.querySelectorAll('.triangulo-tab > div > label > input')

                const triangle = getTriangleData(inputs)


                if (triangle === null) {
                    showInputNotValid(inputs)
                }
                else {
                    updateTriangleOutput(triangle)
                    ObjectSave.loadObjectsAndFill(triangle)
                }
                // TODO: Salvar o objeto triangulo
            })

        function showInputNotValid(inputs) {
            inputs.forEach(inp => {
                inp.required = true
                inp.style.borderColor = 'red'
            })

            updateTriangleOutput({ perimeter: 0, area: 0 })
        }
        function getTriangleData(inputData) {
            let triangle = {
                sideA: inputData[0].value,
                sideB: inputData[1].value,
                sideC: inputData[2].value,
                height: inputData[3].value,
                width: inputData[4].value,
            }
            if (validadeData(triangle) == true) {
                triangle = calculateTriangle(triangle)
                return triangle

            }
            else {
                return null
            }


            function validadeData(triangleData) {
                let validData = false;
                validData = (triangleData.sideA.length > 0) ? true : false;
                validData = (triangleData.sideB.length > 0) ? true : false;
                validData = (triangleData.sideC.length > 0) ? true : false;
                validData = (triangleData.height.length > 0) ? true : false;
                validData = (triangleData.width.length > 0) ? true : false;
                return validData

            }
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




export default triangleObject