class Parser {
    constructor() {

        // Grab elements
        this.submitButton = document.getElementById('model-input-submit-button');
        this.modelInputField = document.getElementById('model-input-field');

        this.modelInputField.value = `ResNet(
            (conv1): Conv2d(3, 64, kernel_size=(7, 7), stride=(2, 2), padding=(3, 3), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
            (bn1): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
            (relu): ReLU(inplace=True)
            (maxpool): MaxPool2d(kernel_size=3, stride=2, padding=1, dilation=1, ceil_mode=False)
            (layer1): Sequential(
              (0): BasicBlock(
                (conv1): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer1.0.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer1.0.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
              (1): BasicBlock(
                (conv1): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer1.1.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(64, 64, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer1.1.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(64, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
            )
            (layer2): Sequential(
              (0): BasicBlock(
                (conv1): Conv2d(64, 128, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer2.0.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer2.0.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (downsample): Sequential(
                  (0): Conv2d(64, 128, kernel_size=(1, 1), stride=(2, 2), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer2.0.downsample.0_E2048-LR0.05_trTrue_fpTrue.jpeg
                  (1): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                )
              )
              (1): BasicBlock(
                (conv1): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer2.1.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(128, 128, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer2.1.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(128, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
            )
            (layer3): Sequential(
              (0): BasicBlock(
                (conv1): Conv2d(128, 256, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer3.0.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer3.0.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (downsample): Sequential(
                  (0): Conv2d(128, 256, kernel_size=(1, 1), stride=(2, 2), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer3.0.downsample.0_E2048-LR0.05_trTrue_fpTrue.jpeg
                  (1): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                )
              )
              (1): BasicBlock(
                (conv1): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer3.1.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(256, 256, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer3.1.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(256, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
            )
            (layer4): Sequential(
              (0): BasicBlock(
                (conv1): Conv2d(256, 512, kernel_size=(3, 3), stride=(2, 2), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer4.0.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer4.0.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (downsample): Sequential(
                  (0): Conv2d(256, 512, kernel_size=(1, 1), stride=(2, 2), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer4.0.downsample.0_E2048-LR0.05_trTrue_fpTrue.jpeg
                  (1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                )
              )
              (1): BasicBlock(
                (conv1): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer4.1.conv1_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn1): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
                (relu): ReLU(inplace=True)
                (conv2): Conv2d(512, 512, kernel_size=(3, 3), stride=(1, 1), padding=(1, 1), bias=False) | ./resources/images/feature_visualizations/S-RESNET18-FULL-CONV/layer4.1.conv2_E2048-LR0.05_trTrue_fpTrue.jpeg
                (bn2): BatchNorm2d(512, eps=1e-05, momentum=0.1, affine=True, track_running_stats=True)
              )
            )
            (avgpool): AdaptiveAvgPool2d(output_size=(1, 1))
            (fc): Linear(in_features=512, out_features=10, bias=True)
          )`
    }

    parseLine(line) {
        const matches = line.match(/^(\s*)(?:\()?(.*?)(?:\))?(:\s+)(.*?)(?:\s*\|\s*(.*?))?$/)
        if (matches) {
            return {offset: matches[1].substring(4).length/2, name: matches[2], type: matches[4], imgPath: matches[5]};
        }
    }

    parseInput() {
        const input = this.modelInputField.value;
        const linesParsed = [];
        const lines = input.split("\n");
        lines.shift(); // Shift gets rid of first entry
        lines.forEach(line => {
          const parsedLine = this.parseLine(line)
          if (!(parsedLine == null)) {
            linesParsed.push(parsedLine)
          }
        });
        const rootNode = new TreeNode('model');
        this.generateTree(linesParsed, rootNode);
        this.removeParent(rootNode)
        return rootNode;
    }

    // Credit to code - https://stackoverflow.com/users/15359157/code
    // https://stackoverflow.com/questions/76410250/how-to-convert-a-pytorch-model-architecture-string-into-a-tree-data-structure
    // Iterates through parsed input and creates a tree
    generateTree(linesParsed, node) {
        let lastOffset = -1
        for (const line of linesParsed) {
            const curr = new TreeNode(line.name, line.type, line.imgPath)
            if (line.offset < lastOffset) {
                const steps = lastOffset - line.offset
                let target = node.getParent()
                for(let i = 0; i < steps; i++) target = target.getParent()
                
                target.addChild(curr)
            } else if (line.offset === lastOffset) {
                node.getParent().addChild(curr)
            } else {
                node.addChild(curr)
            }
            lastOffset = line.offset
            node = curr
        }
    }   

    // To prevent circular reference
    removeParent(node) {
        // delete node.parent
        // just because unclosed parens are horrid
        if(node?.type?.endsWith?.("(")) node.type = node.type.slice(0, -1)
        node.children.forEach(child => {this.removeParent(child)})
    }
}
