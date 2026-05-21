const hello = require("./app");
const assert = require("assert");

try {
  assert.strictEqual(hello("DevOps"), "Hello, DevOps!");
  console.log("✅ Test passed");
  process.exit(0);
} { catch (err) 
  console.error("❌ Test failed", err);
  process.exit(1);}
  }
<head>
  <body>
  import json
import os

FILE = "tasks.json"

def load_tasks():
    if os.path.exists(FILE):
        with open(FILE, "r") as f:
            return json.load(f)
    return []

def save_tasks(tasks):
    with open(FILE, "w") as f:
        json.dump(tasks, f)

def show_tasks(tasks):
    for i, task in enumerate(tasks, start=1):
        status = "✓" if task["done"] else "✗"
        print(f"{i}. {task['title']} [{status}]")

tasks = load_tasks()

while True:
    print("\n1.Add 2.View 3.Done 4.Exit")
    choice = input("Choice: ")

    if choice == "1":
        title = input("Task: ")
        tasks.append({"title": title, "done": False})
        save_tasks(tasks)

    elif choice == "2":
        show_tasks(tasks)

    elif choice == "3":
        show_tasks(tasks)
        n = int(input("Task number: ")) - 1
        tasks[n]["done"] = True
        save_tasks(tasks)

    elif choice == "4":
        break;
