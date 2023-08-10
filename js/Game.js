class Game{
    constructor(){}
    start(){
        //crie o objeto form da classe Form
        form = new Form();
        form.show();
        player = new Player();
        player.getCount();
        //criar as sprites dos carros
        car1 = createSprite(width/2-100, height);
        //add a imagem
        car1.addImage(carimg1)
        //define o tamanho
        car1.scale = 0.07
        car2 = createSprite(width/2+100, height);
        //add a imagem
        car2.addImage(carimg2)
        //define o tamanho
        car2.scale = 0.07
        cars =  [car1, car2]

    }
    
    //ler 👀📖 o valor de gameState do BD e guarda na variável
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val();
        })
    }

    //atualizar ✍🏻📖o valor de gameState
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
    play(){
        form.hide()
       //chamar o método getInfo
       Player.getInfo();
       if(allPlayers!== undefined){
            //colocar a imagem da pista
            image (pista, 0, -height*5.0, width, height*6)
            //desenhar as sprites dos carros
            drawSprites()
            var i = 0;
            for(var p in allPlayers){
                var x = allPlayers[p].positionX;
                var y = height - allPlayers[p].positionY;
                
                cars[i].position.x = x;
                cars[i].position.y = y;
                i++;
                if(i==player.indice){
                    camera.position.y = y;
                }
            }
            this.controlarCarro()
       }
    }
    controlarCarro(){
        if(keyDown(UP_ARROW)){
            player.positionY+=10;
            player.update()
        }
    }
}