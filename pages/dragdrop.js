exports.DragDropPage = class DragDropPage{
    constructor(page){
        this.page = page
        this.element_dragable = page.locator('#angular')
        this.element_dropable = page.locator('#droparea')
    }
    async realizarDragDrop(){
        await this.element_dragable.dragTo(this.element_dropable);
    }
}