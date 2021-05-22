const ObjectSave = {

    input: document.querySelector('.objetos-salvos-tab > div> textarea'),
    savedObjects: [],

    loadObjectsAndFill: (objects) => {

        ObjectSave.savedObjects.push(objects)
    },


    fillTextAreaBehavior: () => {
        document.querySelector('.objetos-salvos-tab > div > .loadObjects')
            .addEventListener('click', () => {
                if (ObjectSave.savedObjects.length > 0)
                    ObjectSave.input.value = JSON.stringify(ObjectSave.savedObjects)
            })
    },

    downloadObjectsBehavior: function download() {
        document.querySelector('.objetos-salvos-tab > div  .saveObjects')
            .addEventListener('click', () => {

                if (ObjectSave.savedObjects.length > 0) {
                    this.input.value = JSON.stringify(ObjectSave.savedObjects)

                    let a = document.createElement("a");
                    let file = new Blob([JSON.stringify(ObjectSave.savedObjects)], { type: 'application/json' });
                    a.href = URL.createObjectURL(file);
                    a.download = 'objects';
                    a.click();
                }
            })
    }
}



export default ObjectSave