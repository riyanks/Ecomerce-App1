"""Create Admin

Revision ID: 53a812576fc6
Revises: 2a6766dac440
Create Date: 2023-12-19 11:49:33.557934

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '53a812576fc6'
down_revision = '2a6766dac440'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=25), nullable=False),
    sa.Column('email', sa.String(length=80), nullable=False),
    sa.Column('password', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('admin')
    # ### end Alembic commands ###
