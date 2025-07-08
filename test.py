print("Hello World")

numbers = [1,2,3,4]

doubled = [x*2 for x in numbers]
print(doubled)

doubled_with_map = list(map(lambda x: x*2, numbers))
print(doubled_with_map)