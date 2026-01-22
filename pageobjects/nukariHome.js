class NaukariHomepage{

    constructor(page){
        this.page= page;
        this.degination = "//span[@class='desig']"
        this.profContent="//div[@class='profile-perf-content']"
    }

    async findPerformance(){
        await this.page.locator(this.profContent).all()
    }
}