import csv
import json

csv_file = 'contratos2024.csv'
json_file = 'output.json'

# Initialize an empty list to store the data
data = []

# Read the CSV file and convert it to JSON
with open(csv_file, 'r', encoding='utf-8') as csvfile:
    csv_reader = csv.DictReader(csvfile, delimiter=';')
    for row in csv_reader:
        data.append(row)

# Write the JSON data to a file
with open(json_file, 'w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, ensure_ascii=False, indent=4)

print("Conversion complete. JSON file created successfully.")
