from exts import db


"""
class Recipe:
    id:int primary key
    title:str 
    description:str (text)
"""


class Recipe(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    title = db.Column(db.String(), nullable=False)
    description = db.Column(db.Text(), nullable=False)

    def __repr__(self):
        return f"<Recipe {self.title} >"

    def save(self):
        """
        The save function is used to save the changes made to a model instance.
        It takes in no arguments and returns nothing.

        :param self: Refer to the current instance of the class
        :return: The object that was just saved
        :doc-author:jod35
        """
        db.session.add(self)
        db.session.commit()

    def delete(self):
        """
        The delete function is used to delete a specific row in the database. It takes no parameters and returns nothing.

        :param self: Refer to the current instance of the class, and is used to access variables that belongs to the class
        :return: Nothing
        :doc-author:jod35
        """
        db.session.delete(self)
        db.session.commit()

    def update(self, title, description):
        """
        The update function updates the title and description of a given blog post.
        It takes two parameters, title and description.

        :param self: Access variables that belongs to the class
        :param title: Update the title of the post
        :param description: Update the description of the blog post
        :return: A dictionary with the updated values of title and description
        :doc-author:jod35
        """
        self.title = title
        self.description = description

        db.session.commit()

"""
class User:
    id:integer
    username:string
    email:string
    password:string
"""


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    email = db.Column(db.String(80), nullable=False)
    password = db.Column(db.Text(), nullable=False)

    def __repr__(self):
        """
        returns string rep of object

        """
        return f"<User {self.username}>"

    def save(self):
        db.session.add(self)
        db.session.commit()



"""
class Product:
    id:integer
    labels = string
    category = string
    img = string
    hover_img = string
    price = integer
    description = string
    rating_rate = float
    rating_count = integer
"""

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    labels = db.Column(db.String(25), nullable=False)
    category = db.Column(db.String(25), nullable=False)
    img = db.Column(db.String(), nullable=False)
    hover_img = db.Column(db.String(), nullable=False)
    title = db.Column(db.String(255), nullable=False, unique=True)
    price = db.Column(db.Float(), nullable=False)
    description = db.Column(db.Text(), nullable=False)
    rating_rate = db.Column(db.Float(), nullable=False)
    rating_count = db.Column(db.Integer(), nullable=False)

    def __repr__(self):
        return f"<Product {self.title}>"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, labels, category, img, hover_img, title, price, description, rating_rate, rating_count):
        self.labels = labels
        self.category = category
        self.img = img
        self.hover_img = hover_img
        self.title = title
        self.price = price
        self.description = description
        self.rating_rate = rating_rate
        self.rating_count = rating_count

        db.session.commit()