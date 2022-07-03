import TypeWriter from 'typewriter-effect/dist/core'

export const autoTypeWriter = () => {
    const elements = document.getElementById("type-writer-name")
    const typewriter = new TypeWriter('#type-writer-name',{
        loop: true,
    })

    typewriter.typeString('<span>Neath Sombathmorhareach</span>').deleteAll().start()
}
