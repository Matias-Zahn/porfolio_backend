import { AppRoutes } from "./presentation/routes"
import { Server } from "./presentation/server"



(() => {
    main()
})()



function main(){

    new Server(
        AppRoutes.routes
    ).start()

}