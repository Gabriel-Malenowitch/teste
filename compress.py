import os
from PIL import Image

def compress_and_convert_images(pasta_origem, pasta_destino, qualidade=90, resizer_divisor=3):
    """
    Lê, redimensiona, converte e comprime todas as imagens da pasta de origem.
    
    Estratégias aplicadas:
      - Redimensionamento: divide a largura e altura da imagem pelo valor de resizer_divisor.
      - Conversão para RGB, se necessário.
      - Compressão: utiliza parâmetros de qualidade, optimize e compressão avançada.
      - Conversão para o formato .webp.
    
    Parâmetros:
      pasta_origem (str): Pasta com as imagens originais.
      pasta_destino (str): Pasta onde as imagens processadas serão salvas.
      qualidade (int): Parâmetro de qualidade para compressão (ex.: 90).
      resizer_divisor (int): Fator para reduzir as dimensões da imagem (ex.: 3).
    """
    # Cria a pasta de destino, se necessário
    if not os.path.exists(pasta_destino):
        os.makedirs(pasta_destino)
    
    # Percorre todos os arquivos na pasta de origem
    for arquivo in os.listdir(pasta_origem):
        caminho_arquivo = os.path.join(pasta_origem, arquivo)
        
        # Verifica se é um arquivo e ignora SVGs (não suportados pelo Pillow)
        if not os.path.isfile(caminho_arquivo):
            continue
        if arquivo.lower().endswith('.svg'):
            print(f"Arquivo {arquivo} é SVG e não pode ser processado pelo Pillow, pulando.")
            continue
        
        try:
            # Tenta abrir a imagem
            with Image.open(caminho_arquivo) as img:
                # Calcula o novo tamanho (garante que largura e altura sejam pelo menos 1 pixel)
                nova_largura = max(1, img.width // resizer_divisor)
                nova_altura = max(1, img.height // resizer_divisor)
                novo_tamanho = (nova_largura, nova_altura)
                
                # Redimensiona a imagem usando o filtro LANCZOS
                img_redimensionada = img.resize(novo_tamanho, Image.Resampling.LANCZOS)
                
                # Converte para RGB, se necessário
                if img_redimensionada.mode != 'RGB':
                    img_redimensionada = img_redimensionada.convert('RGB')
                
                # Define o caminho de saída convertendo a extensão para .webp
                nome_base, _ = os.path.splitext(arquivo)
                caminho_saida = os.path.join(pasta_destino, nome_base + '.webp')
                
                # Salva a imagem em formato WebP com compressão avançada
                # O parâmetro 'method=6' indica um nível mais alto de compressão (pode demorar mais)
                img_redimensionada.save(caminho_saida, 'WEBP', quality=qualidade, optimize=True, method=6)
                
                print(f'Imagem {arquivo} processada: redimensionada para {novo_tamanho} e convertida para .webp.')
        except Exception as erro:
            print(f'Arquivo {arquivo} não pôde ser processado: {erro}')

if __name__ == '__main__':
    # Defina os caminhos relativos para as pastas de origem e destino
    pasta_origem = './images-original'
    pasta_destino = './images'
    
    # Parâmetros de compressão e redimensionamento
    qualidade = 70         # ajuste para um valor menor se precisar reduzir mais a qualidade/tamanho
    resizer_divisor = 3    # aumente esse valor para diminuir mais as dimensões da imagem

    compress_and_convert_images(pasta_origem, pasta_destino, qualidade, resizer_divisor)
