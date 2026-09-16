# pyright: reportMissingImports=false
from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    @app.route('/api/pastries')
    def pastries():
        return [
                    {
                        "id":1,
                        "name":"Celebration Cake",
                        "imageLink":"/image/crowned-cake.jpeg",
                        "description":"The main event.Modern glam cakes like our 21st Birthday design-textured buttercream, gold balls, crowns, palm spears & custom troops.Perfect for Birthdays , Baby Showers Weddings",
                        "price":"depends on size and design"
                    },
                    {
                        "id":2,
                        "name":"Jam Crumble Squares",
                        "imageLink":"/image/Jam-crumble-squares.jpeg",
                        "description":"Golden, buttery, crunchy outside with a sweet jam center.Our homemade oats crumble squares-baked golden brown, soft inside, crunchy on top",
                        "price":20
                    },
                    {
                        "id":3,
                        "name":"Double Chocolate muffins",
                        "imageLink":"/image/double-choc.jpeg",
                        "description":"Rich, moist chocolate muffins loaded with choc chips.Soft, fresh addictive.Our everyday bestseller",
                        "price":25
                    },
                    {
                        "id":4,
                        "name":"Scone",
                        "imageLink":"/image/scones.jpeg",
                        "description":"Soft, fulfy and baked fresh daily.Our classic buttermilk scones are golden on top, soft inside and perfectly buttery",
                        "price":18
                    },
                    {
                        "id":5,
                        "name":"Luxe Buttercream Cupcake",
                        "imageLink":"/image/lux-cupcake.jpeg",
                        "description":"Fulffy vanilla cupcakes with signature nude and white buttercream swirls, gold dust & edible gold pearls.Elegent and delicious",
                        "price":30
                    },
                    {
                        "id":6,
                        "name":"Melt in Moments",
                        "imageLink":"/image/melt-in-moments.jpeg",
                        "description":"Classic hand-pipe biscuits-jam center, swirls & fingers.Nuttery, cruchy, perfect with tea.Made with real butter",
                        "price":20
                    }
                ]

    @app.route('/api/greeners')
    def greeners():
        return {"message": "Welcome to the Greeners API!"}

    return app


if __name__ == '__main__':
    app=create_app()
    app.run(debug=True, port=5000)