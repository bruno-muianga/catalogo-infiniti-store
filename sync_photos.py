#!/usr/bin/env python3
import glob
import os
import shutil
import time

def sync_category(folder, base_name, named_list):
    """
    Sincroniza fotos recém-colocadas (inclusive fotos do WhatsApp ou fotos soltas)
    com os nomes esperados pelo site.
    """
    if not os.path.exists(folder):
        return

    # Buscar todas as imagens na pasta
    exts = ('*.jpg', '*.jpeg', '*.png', '*.webp', '*.JPG', '*.JPEG', '*.PNG')
    all_files = []
    for ext in exts:
        all_files.extend(glob.glob(os.path.join(folder, ext)))

    # Separar arquivos já nomeados padrão dos novos (ex: WhatsApp)
    new_files = [
        f for f in sorted(all_files)
        if not os.path.basename(f).startswith(base_name + '-')
        and os.path.basename(f) not in [name for name, _ in named_list]
        and not os.path.basename(f).startswith('bracelete-')
    ]

    if new_files:
        print(f"[{folder}] Detectados {len(new_files)} novos arquivos!")
        for i, new_f in enumerate(new_files):
            if i < len(named_list):
                desc_name, num_name = named_list[i]
                shutil.copy(new_f, os.path.join(folder, desc_name))
                shutil.copy(new_f, os.path.join(folder, num_name))
                print(f" -> Vinculado: {os.path.basename(new_f)} -> {desc_name} e {num_name}")

if __name__ == '__main__':
    aneis_names = [
        ('anel-coracao-rosa.jpg', 'anel-1.jpg'),
        ('anel-coracao-rosa-pave.jpg', 'anel-2.jpg'),
        ('anel-coracao-azul.jpg', 'anel-3.jpg'),
        ('anel-sol-lua.jpg', 'anel-4.jpg'),
        ('anel-floco-neve.jpg', 'anel-5.jpg'),
        ('anel-tiara-princesa.jpg', 'anel-6.jpg'),
        ('anel-solitario-rosa.jpg', 'anel-7.jpg'),
        ('anel-onda-pave.jpg', 'anel-8.jpg'),
        ('anel-infinito.jpg', 'anel-9.jpg'),
        ('anel-tres-aros.jpg', 'anel-10.jpg'),
    ]

    colares_names = [
        ('colar-circulo-pave.jpg', 'colar-1.jpg'),
        ('colar-ponto-de-luz.jpg', 'colar-2.jpg'),
        ('colar-arvore-familia.jpg', 'colar-3.jpg'),
        ('colar-halo-quadrado.jpg', 'colar-4.jpg'),
        ('colar-coracao-elevado.jpg', 'colar-5.jpg'),
        ('colar-infinito.jpg', 'colar-6.jpg'),
        ('colar-circulo-ouro-rose.jpg', 'colar-7.jpg'),
        ('colar-elos-pandora-me.jpg', 'colar-8.jpg'),
        ('colar-gota-radiante.jpg', 'colar-9.jpg'),
        ('colar-perola-cultura.jpg', 'colar-10.jpg'),
    ]

    pingentes_names = [
        ('pingente-coracao-mae.jpg', 'pingente-1.jpg'),
        ('pingente-murano-rosa.jpg', 'pingente-2.jpg'),
        ('pingente-cadeado-chave.jpg', 'pingente-3.jpg'),
        ('pingente-separador-azul.jpg', 'pingente-4.jpg'),
        ('pingente-trevo-sorte.jpg', 'pingente-5.jpg'),
        ('pingente-disney-mickey.jpg', 'pingente-6.jpg'),
        ('pingente-asas-anjo.jpg', 'pingente-7.jpg'),
        ('pingente-arvore-vida.jpg', 'pingente-8.jpg'),
        ('pingente-coroa-real.jpg', 'pingente-9.jpg'),
        ('pingente-sol-lua.jpg', 'pingente-10.jpg'),
    ]

    pulseiras_names = [
        ('pulseira-studded.jpg', 'pulseira-1.jpg'),
        ('pulseira-infinity-knots.jpg', 'pulseira-2.jpg'),
        ('pulseira-coracao-pedra-tripla.jpg', 'pulseira-3.jpg'),
        ('pulseira-ouro-fecho-coracao.jpg', 'pulseira-4.jpg'),
        ('pulseira-corrente-caixa.jpg', 'pulseira-5.jpg'),
        ('pulseira-couro-trancado.jpg', 'pulseira-6.jpg'),
        ('pulseira-borboleta-azul.jpg', 'pulseira-7.jpg'),
        ('pulseira-coroa-signature.jpg', 'pulseira-8.jpg'),
        ('pulseira-moments-fecho-coracao.jpg', 'pulseira-9.jpg'),
        ('bracelete-rigido-barril.jpg', 'pulseira-10.jpg'),
        ('pulseira-ouro-rosa.jpg', 'pulseira-11.jpg'),
        ('pulseira-elos-pandora-me.jpg', 'pulseira-12.jpg'),
    ]

    brincos_names = [
        ('brinco-1.jpg', 'brinco-1.jpg'),
        ('brinco-2.jpg', 'brinco-2.jpg'),
        ('brinco-3.jpg', 'brinco-3.jpg'),
        ('brinco-4.jpg', 'brinco-4.jpg'),
        ('brinco-5.jpg', 'brinco-5.jpg'),
        ('brinco-6.jpg', 'brinco-6.jpg'),
        ('brinco-7.jpg', 'brinco-7.jpg'),
        ('brinco-8.jpg', 'brinco-8.jpg'),
        ('brinco-9.jpg', 'brinco-9.jpg'),
        ('brinco-10.jpg', 'brinco-10.jpg'),
    ]

    sync_category('assets/aneis', 'anel', aneis_names)
    sync_category('assets/colares', 'colar', colares_names)
    sync_category('assets/pingentes', 'pingente', pingentes_names)
    sync_category('assets/pulseiras', 'pulseira', pulseiras_names)
    sync_category('assets/brincos', 'brinco', brincos_names)
    print("Sincronização concluída com sucesso!")
