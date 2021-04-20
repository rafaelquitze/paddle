namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RigthPaddles = SpriteKind.create()
}
function create_rigth_paddle () {
    rigth_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . 2 7 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LeftPaddles)
    controller.moveSprite(rigth_paddle, 0, 150)
    rigth_paddle.setStayInScreen(true)
    rigth_paddle.left = 160
}
function create_left_paddle () {
    rigth_paddle = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . 8 6 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.LeftPaddles)
    controller.moveSprite(rigth_paddle, 0, 150)
    rigth_paddle.setStayInScreen(true)
    rigth_paddle.left = 0
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RigthPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
function create_ball () {
    ball = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 6 6 6 6 . . . . . . . . . 
        . . 6 6 1 d 6 6 6 . . . . . . . 
        . . 6 1 1 d 4 4 4 b b . . . . . 
        . . 6 d d d 4 4 4 4 4 b b . . . 
        . . 6 d d d 4 4 1 1 4 4 b . . . 
        . . b b b b b b 4 4 4 4 b . . . 
        . . . . b c c b b 4 4 d d c . . 
        . . . . . b b c b b d d 1 c . . 
        . . . . . . c c c b b d 1 c . . 
        . . . . . . . . b c b b c b . . 
        `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
let ball: Sprite = null
let rigth_paddle: Sprite = null
create_ball()
create_left_paddle()
create_rigth_paddle()
