from main import create_app
from config import DevConfig, ProdConfig

app = create_app(DevConfig)

#run with 
if __name__ == "__main__":

    app.run()