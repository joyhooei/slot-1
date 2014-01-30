var WelcomeLayer = View.derive({
    init : function(){
        this.setPosition(View.width, 0);
        Hammer($('enter-slot')).on('tap', this.onEnterSlot.bind(this));
        Hammer($('enter-earn')).on('tap', this.onEnterEarn.bind(this));
    },
    onEnterSlot : function(){
        Player.update(function(){
            Director.show('slot');
        });
    },
    onEnterEarn : function(){
        Player.earn(function(earn){
            Director.show('earn').setTradeList(earn);
        });
    }
});