from collections import Iterable

class TupleStream(Iterable):

    def __init__(self, name, schema, base):
        self.name = name
        self.schema = schema
        self.base = base
